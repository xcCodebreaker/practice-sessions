package integers

import (
	"fmt"
	"testing"
)

// Remember to add "//Output:" or else the Example func won't show up
func ExampleAdd() {
	sum := Add(2, 3)
	fmt.Println(sum)
	//Output: 5
}

func TestAdder(t *testing.T) {
	got := Add(2, 2)
	want := 4

	if got != want {
		t.Errorf("got %d want %d", got, want)
	}
}
