package server

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/require"
)

type want struct {
	name       string
	success    bool
	statusCode bool
}

func Test_MenuOfTheDayAPI(t *testing.T) {
	r := require.New(t)
	tests := []struct {
		name       string
		success    bool
		statusCode int
	}{
		{
			name:       "Can get the menu of the day",
			success:    true,
			statusCode: http.StatusOK,
		},
		{
			name:       "Can not get the menu of the day",
			success:    false,
			statusCode: http.StatusInternalServerError,
		},
	}

	s := &mockMenuService{}
	h, err := newMenuHandler(s)
	r.NoError(err)

	ts := httptest.NewServer(http.HandlerFunc(h.menuOfTheDay))
	defer ts.Close()

	for _, tt := range tests {
		s.hasMenu = tt.success
		resp, err := http.Get(ts.URL)
		r.NoError(err)

		var respJSON APIResponse
		dec := json.NewDecoder(resp.Body)
		err = dec.Decode(&respJSON)
		r.NoError(err)

		r.Equal(tt.success, respJSON.Success)
		r.Equal(tt.statusCode, resp.StatusCode)
	}
}
