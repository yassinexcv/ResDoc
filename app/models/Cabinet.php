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
        public function getOne($reference){
            return $this->execute("SELECT * FROM cabinet WHERE reference = ?", [$reference]);
        }
        public function add($data){
            $rdv = $this->execute("SELECT * FROM cabinet where `day` = ? AND `order_` = ?", [$data[0], $data[1]]);
            if (count($rdv) > 0) return false;
            $this->execute("INSERT INTO `cabinet`(`id`, `day`, `order_`, `reference`) VALUES (null,?,?,?)", $data);
            return true;
        }
        public function update($data){
            return $this->execute("UPDATE `cabinet` SET `day`=?,`order_`=? WHERE id = ?", $data);
        }
        public function delete($id){
            return $this->execute("DELETE FROM `cabinet` WHERE id = ?", [$id]);
        }
    }


?>