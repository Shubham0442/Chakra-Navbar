import React from 'react'
import { Button, Stack  } from '@chakra-ui/react' 
import styles from './navbar.module.css'
import Button1 from "./Button"
import Onhover from './Onhover'
import Onhover1 from './Onhover1'

 const Navbar = () => {
   return (
     <div className={styles.navbar}>
         <h4 className={styles.logo}>Logo</h4>
         <Onhover/>
         <Onhover1/>
         <div>
                <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='black' variant='ghost' style={{borderRadius:"0px"}}>
                        Learn Design
                        </Button>
                        <Button colorScheme='black' variant='ghost' style={{borderRadius:"0px"}}>
                        Hire Designers
                        </Button>
                </Stack>    
         </div>
         <div className={styles.left} >
             <Button1 />
         </div>
     </div>
   )
 }
 
 export default Navbar