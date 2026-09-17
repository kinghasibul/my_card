function copyImoNumber() {
        var number = "+96565601790";
        navigator.clipboard.writeText(number).then(function() {
            var btnText = document.getElementById("imoText");
            var originalText = btnText.innerText;
            
            // 1. Show Instant copied alert inside button text
            btnText.innerText = "Number Copied! Open Imo...";
            
            // 2. Open IMO app directly in background
            setTimeout(function() {
                window.location.href = "imo://";
            }, 400);

            // 3. Reset button text after 3 seconds
            setTimeout(function() {
                btnText.innerText = originalText;
            }, 3000);
        }).catch(function(err) {
            alert("IMO Number: " + number + " (Please copy manually)");
        });
    }
