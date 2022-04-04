<?php
    class Cabinet extends Model{
        public function __construct(){
            parent::__construct();
            $this->table = "cabinet";
            $this->primaryKey = "id";
        }
        public function getAll(){
            return $this->execute("SELECT * FROM cabinet");
        }
        public function getOne($id){
            return $this->execute("SELECT * FROM cabinet WHERE id = ?", [$id]);
        }
        public function add($data){
            return $this->execute("INSERT INTO `cabinet`(`id`, `day`, `order_`, `reference`) VALUES (null,?,?,?)", $data);
        }
        public function update($data){
            return $this->execute("UPDATE `cabinet` SET `day`=?,`order_`=?,`reference`=? WHERE id = ?", $data);
        }
        public function delete($id){
            return $this->execute("DELETE FROM `cabinet` WHERE id = ?", [$id]);
        }
    }


?>