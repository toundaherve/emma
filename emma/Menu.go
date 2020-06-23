package emma

// MenuService handle menu actions
type MenuService interface {
	MenuOfTheDay() (*Menu, error)
}

// Menu contains available foods
type Menu struct {
	Foods []*Food `json:"foods"`
}

// Food represents a plate
type Food struct {
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Image       string  `json:"image"`
}
