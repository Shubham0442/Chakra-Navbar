import React from 'react'
import { useDisclosure } from "@chakra-ui/react" 
import styles from './navbar.module.css'
import {
    
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue
} from "@chakra-ui/react"
//import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons' 
import { Button } from '@chakra-ui/react'


const Onhover1 = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={0}
                _hover={{ bg: useColorModeValue("white.100", "gray.700"), border:" solid #4294f2" }}
                aria-label="Courses"
                fontWeight="500"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                width="10%"
            ><div> Find Work </div>
              
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} className={styles.list}>
                <MenuItem>
                <div>
                    <Button variant="none" >Job Board</Button>
                    <p>Find your Dream Design Job</p>
                </div>
                </MenuItem>

                <MenuItem>
                <div>
                    <Button variant="none" >Freelance Projects</Button>
                    <p>Find your Dream Design Job</p>
                </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default Onhover1