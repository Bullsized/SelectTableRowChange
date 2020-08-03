$(document).ready(function () {
    var result;
    var url = "http://swapi.dev/api/people/";
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function (data) {
            result = data['results'];
        },
        error: function () {
            console.log('Check status errors.');
        }
    });

    $(result).each(function (index, value) {
        $('#main-select').append('<option value="' + index + '">' + value.name + '</option>');
    });

    $("#main-select").change(function () {
        let id = $(this).val();
        if (!isNaN(id)) {
            $('#display-data').empty().html(`<th scope='row'>${id}</th>
                        <td>${result[id].name}</td>
                        <td>${result[id].gender}</td>
                        <td>${result[id].birth_year}</td>
                        <td>${result[id].height}</td>
                        <td>${result[id].mass}</td>`)
        }
    });
});
