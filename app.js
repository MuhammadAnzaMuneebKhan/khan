let MarksCalculator = document.querySelector("#CalculateMark");
MarksCalculator.addEventListener("click", () => {
    let EnglishBook = parseInt(document.getElementById("English").value);
    let MathBook = parseInt(document.getElementById("Math").value);
    let UrduBook = parseInt(document.getElementById("Urdu").value);
    let ScienceBook = parseInt(document.getElementById("Science").value);
    if (EnglishBook > 100 || MathBook > 100 || UrduBook > 100 || ScienceBook > 100) {
        alert("PLz Enter less THan 100");
    }
    else {
        // sum of all books marks from input field...
        let obtainMarks = EnglishBook + MathBook + UrduBook + ScienceBook;
        document.getElementById("Obtain").innerHTML = obtainMarks;
        // find percentage
        let getPercentage = Math.floor(obtainMarks / 400 * 100);
        document.querySelector("#Percentage").innerHTML = `${getPercentage}%`;
        //pass /Fail Remarks by if / else conditions
        if (EnglishBook >= 40 && MathBook >= 40 && ScienceBook >= 40 && UrduBook >= 40) {
            document.getElementById("Remarks").innerHTML = "<span style='color:#291'>Pass</span>";
        } else {
            document.getElementById("Remarks").innerHTML = "<span style='color:red'>Fail</span>";
        }
        //
        if (getPercentage >= 90 ) {
            document.getElementById("Grade").innerHTML = "A";
        }
        else if (getPercentage >= 80 ) {
            document.getElementById("Grade").innerHTML = "B";

        }
        else if (getPercentage >= 70) {
            document.getElementById("Grade").innerHTML = "C";

        }
        else if (getPercentage >= 60) {
            document.getElementById("Grade").innerHTML = "D";

        }
        else if (getPercentage >= 50) {
            document.getElementById("Grade").innerHTML = "E";
        }
        else {
            document.getElementById("Grade").innerHTML = "F";
        }


    }
});