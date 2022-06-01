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
import { Button } from '@chakra-ui/react'
const Onhover = () => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen} >
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={0}
                _hover={{ bg: useColorModeValue("white.100", "black.700"), border:" solid #4294f2" }}
                aria-label="Courses"
                fontWeight="500"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}

            >
                Inspiration 
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} className={styles.list}>
                <MenuItem >
                <div>
                    <Button variant="none" >Explore Design work</Button>
                    <p>Trending Design to inspire you</p>
                </div>
                </MenuItem>
                <MenuItem >
                 <div>
                    <Button variant="none" >New And Noteworthy</Button>
                    <p>Up-and-coming Designer</p>
                 </div>
                 </MenuItem> 
            </MenuList>
        </Menu>
    )
}

export default Onhover