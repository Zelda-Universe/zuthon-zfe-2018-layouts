function startDataSlideshow() {
  var currentSlide = 0;
  var slides = document.querySelectorAll('#info-boxes .info-box:not(.skip)');

  setInterval(function () {
    slides[currentSlide].className = 'info-box';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'info-box active';
  }, 15000);
};

function insertCountdown() {
  var timespan = countdown(null, new Date('Thu Aug 16 2018 12:00:00 GMT-0700 (PDT)'));

  document.getElementById('stand-by-title').innerText =
      ('0' + timespan.hours).slice(-2) + ':' +
      ('0' + timespan.minutes).slice(-2) + ':' +
      ('0' + timespan.seconds).slice(-2);

  setTimeout(insertCountdown, 1000);
};

function getDonationAmount() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://tiltify.com/api/v3/campaigns/e26ed24382853f8242b4eda61c70311c');
  request.setRequestHeader('Authorization', 'Bearer e180f041bb6b231a6b9a50ebb0393045a790a50bfa200de9916b49dbad4ed7ec')

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      if (request.responseText) {
        var data = {};

        try {
          data = JSON.parse(request.responseText).data || {};
          document.getElementById('donation-amount').innerText = '$' + numeral(data.amountRaised || 0).format('0,0.00');
        } catch (e) {
          console.error(new Error(e));
        }
      }

      setTimeout(getDonationAmount, 10000);
    }
  };

  request.send();
};

function getLatestDonation() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://tiltify.com/api/v3/campaigns/e26ed24382853f8242b4eda61c70311c/donations');
  request.setRequestHeader('Authorization', 'Bearer e180f041bb6b231a6b9a50ebb0393045a790a50bfa200de9916b49dbad4ed7ec')

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      if (request.responseText) {
        var data = {};

        try {
          data = JSON.parse(request.responseText).data[0] || {};
          if (data.name) document.getElementById('latest-donation').innerText = data.name + ': $' + numeral(data.amount || 0).format('0.00');
        } catch (e) {
          console.error(new Error(e));
        }
      }

      setTimeout(getLatestDonation, 10000);
    }
  };

  request.send();
};

function adjustInfoLength() {
  var latestDonation = document.getElementById('latest-donation');
  var nextGame = document.getElementById('next-game');

  var containerWidth = Number(window.getComputedStyle(nextGame.parentNode).width.split('px')[0]);
  var latestDonationWidth = Number(window.getComputedStyle(latestDonation).width.split('px')[0]);
  var nextGameWidth = Number(window.getComputedStyle(nextGame).width.split('px')[0]);

  if (containerWidth < latestDonationWidth) latestDonation.setAttribute('style', 'align-self: flex-start;');
  else latestDonation.setAttribute('style', '');

  if (containerWidth < nextGameWidth) nextGame.setAttribute('style', 'align-self: flex-start;');
  else nextGame.setAttribute('style', '');

  setTimeout(adjustInfoLength, 15000);
};
