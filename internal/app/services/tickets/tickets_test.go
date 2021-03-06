package tickets_test

import (
	testingDb "github.com/ionian-uni-ieee/ieeesb-app/internal/app/drivers/database/testing"
	"github.com/ionian-uni-ieee/ieeesb-app/internal/app/repositories"
	"github.com/ionian-uni-ieee/ieeesb-app/internal/app/services/tickets"
)

var database = testingDb.MakeDatabaseDriver()
var reps = repositories.MakeRepositories(database)
var service = tickets.MakeService(reps)
