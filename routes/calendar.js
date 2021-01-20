app.get("/",(req,res)=>{
    const year = req.query.year || 2020;
    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    res.render("calendar.js",{calendar: calendar(year),months,year});
});  