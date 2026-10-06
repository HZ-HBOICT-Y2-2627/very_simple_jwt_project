import express from 'express'


app.use(express.json())

app.get('/public', (req, res) => {
    res.json({ message: `Hello, welcome to the public space.` });
})

app.get('/protected', (req, res) => {
  res.json({ message: `Hello, this is protected space.` });
});

app.get('/hzOnly', (req, res) => {
  res.json({ message: `Hello, this is for hz-members only.` });
});


app.listen(3000)