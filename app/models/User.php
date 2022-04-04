<?php
    
class User extends Model {

    public function __construct(){
        parent::__construct();
        $this->table = "user";
        $this->primaryKey = "reference";
    }
    
    public function register($data){
        return $this->execute("INSERT INTO user (reference,nom,prenom,datenaisance) VALUES (?,?,?,?)", $data);
  
    } 
       public function login($data){
        return $this->execute("SELECT * FROM user WHERE reference = ?", $data);

        // $user= $this->execute("SELECT * FROM user WHERE reference = ? ", $data);
        
    }
}
?>