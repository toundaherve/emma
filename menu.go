package main

import (
	"github.com/jinzhu/gorm"
)

// // Food represents the Food of the restaurant
// type Food struct {
// 	ID          uint   `json:"id"`
// 	Name        string `json:"name"`
// 	Description string `json:"description"`
// 	Price       uint   `json:"price"`
// }

// // Menu represents a menu
// type Menu struct {
// 	ID       uint `json:"id"`
// 	Friday   Food `json:"friday"`
// 	Saturday Food `json:"saturday"`
// 	Sunday   Food `json:"sunday"`
// }

// Food represents a food in the db
type Food struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       uint   `json:"price"`
}

// Menu represents the menu in the db
type Menu struct {
	gorm.Model
	Friday        Food `json:"friday" gorm:"foreignkey:FridayRefer"`
	FridayRefer   uint `json:"friday_refer"`
	Saturday      Food `json:"saturday" gorm:"foreignkey:SaturdayRefer"`
	SaturdayRefer uint `json:"saturday_refer"`
	Sunday        Food `json:"sunday" gorm:"foreignkey:SundayRefer"`
	SundayRefer   uint `json:"sunday_refer"`
}
