
import Users from './Users.js'
export const Lifts_Client = {
    Users: [
        {name: "john", weight:120,  lifts:{squat: 123, 
        deadlift: 13, bench: 122}},
        {name: "sam", weight:180,  lifts:{squat: 41, 
        deadlift: 113, bench: 23}}  
            ],

        Return_usersName()
        { 
            var count;
            for(count = 0; count < this.Users.length; count++ ){
               
                return this.Users[count].name;
            }
        }
        ,
        return_Squat(){
           var i;
            for(i=0; i<this.Users.length; i++ ){
                return this.Users[count].lifts.squat;
            }

        },
        return_Bench(){
            var i;
            for(i=0; i<this.Users.length; i++ ){
                return this.Users[count].lifts.bench;
            }
            
        },
        return_Deadlift(){
            var i;
            for(i=0; i<this.Users.length; i++ ){
                return this.Users[count].lifts.deadlift;
            }
            
        },
        
        
}
export const lifts_Server = {
    Users: [],

    Get_Users(){
     return  Lifts_Client.return_Users;
    },
  
}
export class mainUser{
 name;

 lifts;

}
