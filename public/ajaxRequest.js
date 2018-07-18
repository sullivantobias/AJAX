/**
 * Ajax  Request
 * Dependencies: jQuery
 */

$(function() {
    $('#showInfos').on('click', () => {
        $.ajax({
            type: 'GET',
            url: 'public/data/people.json',
            success: (data) => {
                for (let firstKey in data) {
                    if (data) {
                        let prefixFormat = data[firstKey];

                        // console.log(prefixFormat);
                        const name =
                            '<b>Name</b> : ' + prefixFormat.name + '</br>';
                        const surname =
                            '<b>Surname</b> : ' +
                            prefixFormat.surname +
                            '</br>';
                        const country =
                            '<b>country</b> : ' +
                            prefixFormat.country +
                            '</br>';
                        const activity =
                            '<b>activity</b> : ' +
                            prefixFormat.activity +
                            '</br>';
                        $('#infos').append(
                            '<p>' +
                                name +
                                ' ' +
                                surname +
                                ' ' +
                                country +
                                ' ' +
                                activity +
                                '</p>'
                        );
                    }
                }
            },
            error: () => {
                // console.log('Wrong');
            },
        });
    });
});
