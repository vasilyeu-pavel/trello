export default store => next => action => {
	if (!action.generateId) return next(action)
	next({
		...action,
		randomId: Math.round((Date.now() + Math.random())).toString(),
		date: setDate(),
	})
}

function setDate () {
	let date = new Date();

    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;
}


