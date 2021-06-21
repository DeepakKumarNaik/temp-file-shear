/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import { EmailOutlined } from '@material-ui/icons';
import './Details.css';

const Detail = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [toastMessage, setToastMessage] = useState('');

    const [isToastOpen, setIsToastOpen] = useState(false);

    useEffect(async () => {
        try {
            const rawRsponse = await fetch(`http://localhost:5001/user/${id}`, {
                method: 'GET',
                credentials: 'include'
            });
            console.log('raw response', rawRsponse);

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setError('You need to login!');
                setTimeout(() => {
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();

            console.log('json response', jsonResponse, 'user detail');
            setUser(jsonResponse.user);
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const updateUser = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUserDetails = async (event) => {
        event.preventDefault();
        if (!user.firstName) {
            setToastMessage('User name can not be blank');
            setIsToastOpen(true);
            return;
        }

        try {
            console.log('user save in progress', user);
            const rawRsponse = await fetch(`http://localhost:5001/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!rawRsponse.ok) {
                setError('something not ok', rawRsponse.status);
            } else {
                const jsonResponse = await rawRsponse.json();

                console.log('json response user save', jsonResponse, 'user detail');
                setUser(jsonResponse.user);
                setToastMessage('Your profile is saved');
                setIsToastOpen(true);
            }
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    };



  
    return (
        <div style={{ padding: '20px' }}>
            {/*<div>User Detail page</div>*/}
            {error.length > 0 ? <div>Error fetching the data: {error}</div> : null}
            {/*<div>Details about particular item with id: {id}</div>*/}

           {(() => {
         
/*For id 1 */
          if (id==1) {
            return <form>
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc" name="htmlQ1"></input>
            <span>HTML is a scripting language</span>
            <br></br>
            <input type="radio" value="abc" name="htmlQ1"></input>
            <span>HTML is a programming language</span>
            <br></br>
            <input type="radio" value="abc" name="htmlQ1"></input>
            <span>HTML is a indian language</span>
            <br></br>
            <input type="radio" value="abc" name="htmlQ1"></input>
            <span>HTML is not a computer language</span>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            
            </form>
;
          }

        /*For id 2 */
          else if (id==2) {
            return <form>
            <h3>What is CSS ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            
            </form>
;
          }

            /*For id 3 */
            else if (id==3) {
                return <form>
                <h3>What is JS ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                
                </form>
    ;
              }

                /*For id 4 */
          else if (id==4) {
            return <form>
            <h3>What is ReactJS ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            
            </form>
;
          }

            /*For id 5 */
            else if (id==5) {
                return <form>
                <h3>What is NodeJS ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                
                <h3>What is HTML ?</h3>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <input type="radio" value="abc"></input>
                <br></br>
                <input type="submit" value="Submit"></input>
                
                </form>
    ;
              }

                /*For id 6 */
          else if (id==6) {
            return <form>
            <h3>What is MongoDB ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            
            <h3>What is HTML ?</h3>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <input type="radio" value="abc"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            
            </form>
;
          }

         /* return <i>Click to btn to see state update!</i>;*/
        })()}
 


{/*////////////////////////////////////////////////////////*/}

                    <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isToastOpen}
                onClose={() => {
                    setIsToastOpen(false);
                }}
                autoHideDuration={5000}
                message={toastMessage}
                key="profile_save"
            />
            {user.firstName && (
                <>
                    <div>User name: {user.firstName}</div>
                    <div>User last name: {user.lastName}</div>
                    <form>
                        <div>
                            <TextField
                                required
                                id="standard-required"
                                label="First Name"
                                defaultValue={user.firstName}
                                onChange={updateUser}
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                onChange={updateUser}
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Save"
                            onClick={(e) => {
                                saveUserDetails(e);
                            }}
                        />
                    </form>
                </>
            )}
        </div>
    );
};

export default Detail;
