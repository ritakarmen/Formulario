(function() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select, textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify(obj);
    }

    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById("submittableForm");
        var output = document.getElementById("output");
        var formDivs = form.children;

        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var jsonData = {
                rows: []
            };
            for (var i = 0; i < formDivs.length - 1; i++) {
                jsonData.rows.push(JSON.parse(toJSONString(formDivs[i])));
            }
            output.innerHTML = JSON.stringify(jsonData);

        }, false);

    });

})();