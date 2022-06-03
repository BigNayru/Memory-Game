 const suite = document.getElementById('suite');
        const answer = document.getElementById('answer')

        function nombreAleatoire(min, max){
                    return Math.floor(Math.random() * (max-min)) + min;
        }
                    
        let entier = nombreAleatoire(1000,1000000);

        function easy(){
                suite.innerHTML=entier;
                setTimeout(function(){
                    suite.innerHTML="XXXXXX"}, 6000);
        }
        
        function hard(){
                suite.innerHTML=entier;
                setTimeout(function(){
                    suite.innerHTML="XXXXXX"}, 3000);
        }

        function validation(){

            if (parseInt(answer.value) == entier){
                alert("Gagné !");
            }
            else{
                alert("Perdu...");
            }
        }
        resultat.innerHTML = res;