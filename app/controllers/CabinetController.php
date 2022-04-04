<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    require_once APPROOT . "/models/User.php";

    class CabinetController extends Controller{

        public function __construct(){
            $this->model = $this->model("Cabinet");
        }
       
        public function addRendezVous(){
            extract(json_decode(file_get_contents('php://input'), true)); 
            $this->model->add([$day, $order_, $reference]);
        }
        public function getAllRendezVous(){
            $data = $this->model->getAll();
            echo json_encode($data);
        }
        public function getOneRendezVous($id){
            $data = $this->model->getOne($id);
            echo json_encode($data);
        }
        public function updateRendezVous(){
            extract(json_decode(file_get_contents('php://input'), true)); 
            $this->model->update([$day, $order_, $reference, $id]);
        }
        public function deleteRendezVous(){
            extract(json_decode(file_get_contents('php://input'), true)); 
            $this->model->delete($id);
        }


       
    }       