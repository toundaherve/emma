package emma

// MenuService handle menu actions
type MenuService interface {
	MenuOfTheDay() (*Menu, error)
}

// Menu contains available foods
type Menu struct {
	Foods []*Food
}

// Food represents a plate
type Food struct {
	Name string
	Description string
	Price float64
	Image string
}