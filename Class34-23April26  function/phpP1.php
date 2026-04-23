<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP form</title>
</head>

<body>
    <h2>Project</h2>
    <form action="" method="POST">

        number 1 : <input type="number" name="num1"><br>
        number 2 : <input type="number" name="num2"><br><br>
        marks : <input type="number" name="marks"><br><br>
        <input type="submit" name="add" value="Add">
        <input type="submit" name="percent" value="Percentage">
        <input type="submit" name="grade" value="Grade">

    </form>

    <?php
    function add ($a, $b)
    {
        return $a  + $b;
    }
    function percentage($marks)
    {

        return $marks;
    }

    function grade($marks)
    {
        if ($marks >= 80) {
            return "A";
        } elseif ($marks >= 60) {
            return "B";
        } else {
            return "Fail";
        }
    }
    if ($_POST){
        if(isset($_POST['add'])){
            echo"Addition".add($_POST['num1'],$_POST['num2']);
        }
        if(isset($_POST['percent'])){
            echo"Percentage".percentage($_POST['marks']);
        }
         if(isset($_POST['grade'])){
            echo"Grade is :".grade($_POST['marks']);
        }
    }
    ?>
</body>

</html>