<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once APPROOT . "/models/User.php";

    class UserController extends Controller{

        public function __construct(){
            $this->model = $this->model("User");
        }
       
        //  create function to returnt random string of characters
        public function randomString($length = 10){
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
        }


        public function register(){
            $ref = $this->randomString();
            extract(json_decode(file_get_contents('php://input'), true)); 
            $this->model->register([$ref,$nom,$prenom,$datenaisance]);
            echo json_encode($ref);
        }
        public function login(){
           
          $data=json_decode(file_get_contents('php://input'), true); 
          $reference=$data['reference'];
        //   die(var_dump($reference));

           $use= $this->model->login([$reference]);
              if(!empty($use)){
                echo json_encode($use);
              }else{
                echo json_encode(["error"=>"user not found"]);
              }
        }
    }
?>