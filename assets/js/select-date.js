$(function() {
  // Fonction pour créer des options pour une liste déroulante d'années
  function createYearOptions(startYear, endYear) {
    var options = '<option value="" hidden>Votre année</option>';
    for (var year = startYear; year <= endYear; year++) {
      options += '<option value="' + year + '">' + year + '</option>';
    }
    return options;
  }

  // Fonction pour créer des options pour une liste déroulante de mois
  function createMonthOptions() {
    var options = '<option value="" hidden>Votre mois</option>';
    for (var month = 1; month <= 12; month++) {
      var monthText = moment(month, "M").format("MMMM");
      options += '<option value="' + month + '">' + monthText + '</option>';
    }
    return options;
  }

  // Fonction pour créer des options pour une liste déroulante de jours
  function createDayOptions(year, month) {
    var daysInMonth = new Date(year, month, 0).getDate();
    var options = '<option value="" hidden>Votre jour</option>';
    for (var day = 1; day <= daysInMonth; day++) {
      options += '<option value="' + day + '">' + day + '</option>';
    }
    return options;
  }

  // Liste déroulante pour l'année de naissance
  var currentYear = new Date().getFullYear();
  var startYear = currentYear - 100;
  var endYear = currentYear;
  $('#annee-naiss').html(createYearOptions(startYear, endYear));

  // Liste déroulante pour le mois de naissance
  $('#annee-naiss').change(function() {
    var year = $(this).val();
    if (year != '') {
      $('#mois-naiss').html(createMonthOptions());
    } else {
      $('#mois-naiss').html('<option value="">Votre mois de naissance</option>');
      $('#day-naiss').html('<option value="">Votre jour de naissance</option>');
    }
  });

  // Liste déroulante pour le jour de naissance
  $('#mois-naiss').change(function() {
    var year = $('#annee-naiss').val();
    var month = $(this).val();
    if (year != '' && month != '') {
      $('#day-naiss').html(createDayOptions(year, month));
    } else {
      $('#day-naiss').html('<option value="">Votre jour de naissance</option>');
    }
  });

  // Liste déroulante pour l'année de permis B
  $('#annee-permis').html(createYearOptions(startYear, endYear));

  // Liste déroulante pour le mois de permis B
  $('#annee-permis').change(function() {
    var year = $(this).val();
    if (year != '') {
      $('#mois-permis').html(createMonthOptions());
    } else {
      $('#mois-permis').html('<option value="">Votre mois de permis B</option>');
      $('#day-permis').html('<option value="">Votre jour de permis B</option>');
    }
  });

  // Liste déroulante pour le jour de permis B
  $('#mois-permis').change(function() {
    var year = $('#annee-permis').val();
    var month = $(this).val();
    if (year != '' && month != '') {
    $('#day-permis').html(createDayOptions(year, month));
    } else {
    $('#day-permis').html('<option value="">Votre jour de permis B</option>');
    }
  });
  
  $('#day-permis').change(function () {
    var annee_naiss = $('#annee-naiss').val();
    var mois_naiss = $('#mois-naiss').val();
    var day_naiss = $('#day-naiss').val();

    var annee_permis = $('#annee-permis').val();
    var mois_permis = $('#mois-permis').val();
    var day_permis = $('#day-permis').val();

    const date_naiss = new Date(annee_naiss, mois_naiss - 1, day_naiss);
    const date_permis = new Date(annee_permis, mois_permis - 1, day_permis);
    const date_today = new Date();

    const diffTime = Math.abs(date_today - date_permis);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);

    console.log(diffYears.toFixed(2));
  })
});