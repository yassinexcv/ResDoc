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
            if (!$this->model->add([$day, $order_, $reference])){ echo json_encode('Deja reserve');}
            else {echo json_encode('Reservation effectuee');}
        }

        public function getAllRendezVous(){    
            $data = $this->model->getAll();
            echo json_encode($data);
        }

        public function getOneRendezVous(){
            extract(json_decode(file_get_contents('php://input'), true));
            $data = $this->model->getOne($reference);
            echo json_encode($data);
        }

        public function updateRendezVous(){
            extract(json_decode(file_get_contents('php://input'), true)); 
            $this->model->update([$day, $order_, $id]);
        }

        public function deleteRendezVous(){
            extract(json_decode(file_get_contents('php://input'), true)); 
            $this->model->delete($id);
        }


       
    }       