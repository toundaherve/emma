package main

import (
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

func initDB() {
	opened, err := gorm.Open("mysql", "herves:futurefuture1@(192.168.1.123:3306)/emma?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		log.Fatalf("Could not connect to database: %v\n", err)
	}
	db = opened
}

func migrateDB() {
	db.AutoMigrate(&Food{})
	db.AutoMigrate(&Menu{})
}
