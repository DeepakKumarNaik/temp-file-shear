import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import './AddQuiz.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch'
        }
    }
}));

export default function AddQuiz() {
    const history = useHistory();

    const [quizData, setQuizData] = useState({});
    const [questionData, setQuestionData] = useState({});

    const classes = useStyles();

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
        lastLogIn: undefined
    };
    const isSessionActive = Date.now() - currentUser.lastLogIn <= 30 * 60 * 1000;

    if (!isSessionActive) {
        history.push('/login');
    }

    const [value, setValue] = React.useState('Controlled');

    const handleTitleChange = (event) => {
        console.log(event.target.value);

        setQuizData({ ...quizData, title: event.target.value });
    };

    const handleDescriptionChange = (event) => {
        console.log(event.target.value);
        setQuizData({ ...quizData, description: event.target.value });
    };



    useEffect(() => {
        const questions = document.querySelector('#questions');
    }, []);

    const handleAddQuiz = () => {
        setOpen(true);
        // setValue(event.target.value);
    };

    const saveQuiz = () => {
        console.log('quiz data', quizData);
    };
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleQuestionTitleChange = (event) => {

        console.log(event.target.value);
    setQuestionData({ ...questionData, questionTitle: event.target.value });
    
      

    };

    const handleQuestionDescriptionChange = (event) => {

        console.log(event.target.value);
        setQuestionData({ ...questionData, questionDescription: event.target.value });

    };

    const handleQuestionOptionChangeOne = (event) => {

        console.log(event.target.value);
        setQuestionData({ ...questionData, questionOptionOne: event.target.value });
    };

    
    const handleQuestionOptionChangeTwo = (event) => {

        console.log(event.target.value);
        setQuestionData({ ...questionData, questionOptionTwo: event.target.value });
    };

    
    const handleQuestionOptionChangeThree = (event) => {

        console.log(event.target.value);
       setQuestionData({ ...questionData, questionOptionThree: event.target.value });
    };

    
    const handleQuestionOptionChangeFour = (event) => {

        console.log(event.target.value);
     setQuestionData({ ...questionData, questionOptionFour: event.target.value });
    };

    const handleQuestionAnswerChange = (event) => {
        console.log(event.target.value);
        setQuestionData({ ...questionData, questionAnswer: event.target.value });

    };

    const handleAddQuestion = () => {
       
        console.log('question data', questionData);
        setOpen(false);
       /* const addAnotherQuestion = document.querySelector('#submit');
        addAnotherQuestion.innerHTML="Add Another Question";
        /*setOpen(true);*/
        // setValue(event.target.value);
    };



    return (
        <form className={classes.root} Validate autoComplete="off">
            <div>
                <TextField
                    id="title-quiz"
                    placeholder="Title of the Quiz"
                    required
                    variant="filled"
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <TextField
                    id="description-quiz"
                    placeholder="Description of the Quiz"
                    required
                    variant="filled"
                    onChange={handleDescriptionChange}
                />
            </div>

            <div id="questions"></div>

            <br />
            <div>
                <Button id="submit" onClick={handleAddQuiz} variant="contained" color="primary">
                    Add question
                </Button>
                <Button
                    onClick={saveQuiz}
                    id="save"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}>
                    Save
                </Button>
            </div>

            <Dialog
                fullWidth={false}
                maxWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title">
                <DialogTitle id="max-width-dialog-title">Add Question</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <form className={classes.form} Validate>
                        <FormControl className={classes.formControl}>
                            <div>
                                <TextField
                                    id="title"
                                    placeholder="Question title"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionTitleChange}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="description"
                                    placeholder="Question description"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionDescriptionChange}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="option1"
                                    placeholder="option1"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionOptionChangeOne}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="option2"
                                    placeholder="option2"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionOptionChangeTwo}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="option3"
                                    placeholder="option3"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionOptionChangeThree}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="option4"
                                    placeholder="option4"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionOptionChangeFour}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="answer"
                                    placeholder="Question answer"
                                    required
                                    variant="filled"
                                    onChange={handleQuestionAnswerChange}
                                />
                            </div>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddQuestion} color="primary">
                        Add
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}
