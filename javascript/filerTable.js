document.getElementById('filterInput').addEventListener('input', function() {
    var filterValue = this.value.toUpperCase();
    var table = document.getElementById('table-id');
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].getElementsByTagName('td')[0];
        if (td) {
            var textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(filterValue) > -1) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
});
