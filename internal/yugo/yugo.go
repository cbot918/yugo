package yugo

import "fmt"

type Yugo struct{}

func New() *Yugo {
	return &Yugo{}
}

func (y *Yugo) Run() {
	fmt.Println("server start")
}
