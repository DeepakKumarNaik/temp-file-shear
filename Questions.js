/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { getScore } from '../../uiHelper';
import Snackbar from '@material-ui/core/Snackbar';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './Details.css';


const Questions = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [quiz, setQuiz] = useState({ questions: [] });
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [questionAnswers, setQuestionValues] = useState({});
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [unAnswered, setUnAnsweredQuestions] = useState([]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    useEffect(async () => {
        try {
            setIsLoading(true);
            const rawRsponse = await fetch(`http://localhost:5001/quiz/${id}`, {
                method: 'GET',
                credentials: 'include'
            });
            console.log('raw response', rawRsponse);

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setError('You need to login!');
                setTimeout(() => {
                    localStorage.removeItem('isUserLoggedIn');
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();
            console.log('quessee', jsonResponse.quiz);

            setQuiz(jsonResponse.quiz); //
            setIsLoading(false);
            // {name: '', questions: [{title: , options: ['strings']}]}
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const handleChange = (event) => {
        const questionId = event.target.getAttribute('id');
        setQuestionValues({ ...questionAnswers, [questionId]: event.target.value });
    };

    const submitHandler = () => {
        console.log('users submission', questionAnswers);
        const answeredQuestionIds = Object.keys(questionAnswers);
        const allQuestionIds = quiz.questions.map((q) => q.id);

        const unattended = allQuestionIds.filter((qId) => !answeredQuestionIds.includes(qId));
        setUnAnsweredQuestions(unattended);

        if (unattended.length == 0) {
            // write code to make api call to store users submission

            const score = getScore(quiz.answer, questionAnswers);
            setToastMessage(`Your score is ${score}`);
            setIsToastOpen(true);
            setIsSubmitDisabled(true);
           if(score<80){

           }
           else{

           }

        }



    };
/*Timer*/
    const timerProps = {
        isPlaying: true,
        size: 100,
        strokeWidth: 6
      };
      const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer">Too lale...</div>;
        }
      
        return (
          <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
          </div>
        );
      };
/*Timer End */
   
    const renderQuestion = (question, _id) => {
        const isUnanswered = unAnswered.includes(question.id);
        return (
            
            <FormControl component="fieldset">
   
                <FormLabel component="legend">{`${_id + 1}) ${question.title}`} </FormLabel>
                <RadioGroup 
                    aria-label="gender"
                    name="gender1"
                    id={question.id}
                    value={questionAnswers.id}
                    onChange={handleChange}>
                    {question.options.map((option) => {
                        return (
                            
                            <FormControlLabel id="option"
                                value={option}
                                control={<Radio  id={question.id} />}
                                label={option}
                            />
                        );
                    })}
                </RadioGroup>
            </FormControl>
        );
    };

    return (
<div>
       <center id="timer"> <CountdownCircleTimer 
        {...timerProps}
        isPlaying
        duration={60}
        colors={[
          ["#004777", 0.33],
          ["#F7B801", 0.33],
          ['#A30000', 0.33],
         
        ]}
      >
          {renderTime}
      
      </CountdownCircleTimer>
      </center>

        <div style={{ padding: '20px' }}>
           
            {isLoading && <div>Loading quiz...</div>}
            {!isLoading && (
                <div>
                    <h1>{quiz.name}</h1>
                    <Grid>
                        <form className="quiz-form">
                            {quiz.questions.map((question, _id) => {
                                return renderQuestion(question, _id);
                            })}
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={submitHandler}
                                disabled={isSubmitDisabled}>
                                Submit quiz
                            </Button>
                            {isSubmitDisabled && <div>*You can submit a quiz only once</div>}
                        </form>
                    </Grid>
                </div>


            )
            
            }

</div>

            
            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={10000}
                open={isToastOpen}
                onClose={() => {
                    setIsToastOpen(false);
                }}
                
                message={toastMessage}
                key={'success toast'}
            />
        </div>
    );
};

export default Questions;
