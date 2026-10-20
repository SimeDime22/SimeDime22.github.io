                function scoreExam() {
                var score = 0;
                //Question 1
                if(document.getElementById("question_1_a3").checked == true) {
                    score = score + 1;
                    document.getElementById("question_1_result").innerHTML = "Correct";
                }
                else
                {
                    document.getElementById("question_1_result").innerHTML = "Incorrect";
                }

                //Question 2 - use logical AND operator (&&)
                if(document.getElementById("question_2_a2").checked == true && document.getElementById("question_2_a4").checked == true && document.getElementById("question_2_a1").checked == true)
                {
                    score = score + 1;
                    document.getElementById("question_2_result").innerHTML = "Correct";
                }
                else
                {
                    document.getElementById("question_2_result").innerHTML = "Incorrect";
                }
                //total score
                document.getElementById("final_score").innerHTML = "Total Points: " + score;
            }