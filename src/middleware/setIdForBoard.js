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

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}


