function send()
{
    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + "Question : " + number1 + " x " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    wrong = "<h5 style='color:red;'><b>Wrong Answer</b></h5>";
    correct = "<h5 style='color:green;'><b>Correct Answer</b></h5>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}