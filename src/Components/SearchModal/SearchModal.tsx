'use client'
import React, {useState, useCallback, useEffect} from 'react';
import {Modal, Box, TextField, Typography, Divider} from '@mui/material';
import Btn from '../Btn/Btn';
import {IoIosSearch} from "react-icons/io";
import {fetchExternalData} from '@/Utils/functions/dataFetchers';
import {ProductData, ProductResponse} from '@/Utils/Types';
import ProductCard from '../ProductCard/ProductCard';

const SimpleModal = () => {
    const [open,
        setOpen] = useState(false);
    const [searchQuery,
        setQuery] = useState('');
    const [searchResults,
        setSearchResults] = useState < ProductData[] | [] > ([]);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () =>{ 
      setSearchResults([])
      setQuery('')
      setOpen(false); };
      let NoResultFound =  searchResults?.length === 0 && searchQuery?.length > 2;
    const handleSearch = useCallback(() => {
        if (searchQuery.length < 3) {
            setSearchResults([]); // Clear results if query is too short
            return;
        }

        const fetchResults = async() => {
            try {
                const result : ProductData[] | null = await fetchExternalData(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/products/search?q=${encodeURIComponent(searchQuery)}`, undefined, { next: { revalidate: 2 }, cache :'force-cache' }, 'GET');
             
                if (result) {
                    setSearchResults(result
                        );
                } else {
                    setSearchResults([]);

                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchResults();
    }, [searchQuery]);

    // Debounce effect
    useEffect(() => {
        const debounce = setTimeout(() => {
            handleSearch();
        }, 300); // Delay of 300ms

        return () => clearTimeout(debounce);
    }, [searchQuery, handleSearch]);

    return (
        <main>
            <Btn
                onClick={handleOpen}
                sx={{
                minWidth: '40px !Important',
                px: 0
            }}>
                <IoIosSearch fontSize='2.5em'/>
            </Btn>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description">
                <Box
                    sx={{
                    width: '95%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height:'90vh',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    py: 2,
                    mb: 2
                }}>

                    <Box
                        sx={{
                        maxWidth: 'sm',
                        px: 2,
                        pt: 2,
                        pb: 2
                    }}
                        className='auto flex row gap2'>
                        <TextField
                            value={searchQuery}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='What are you looking for?'
                            fullWidth
                            type='text'
                            size='small'
                            variant="outlined"
                            label="Search for items "/>
                        <Btn
                            onClick={handleClose}
                            sx={{
                            mt: 0,
                            px: 0,
                            border: '1px solid red',
                            color: 'red !important'
                        }}>
                            Close
                        </Btn>
                    </Box>
                    <Divider></Divider>
                 {searchResults && searchResults?.length > 0 ?
                 
                 <>
                  <Typography className=' fw500' sx={{py:2,px:1}}>Products</Typography>
                 <Box className='flex wrap row space-around' sx={{px:1}}>
                     {searchResults.map(product => {
                      return <ProductCard sx={{width:searchResults?.length > 1 ? '50%' : 'max-content' }} key={product.id} product={product} />;
                     })} 
                 </Box>
                 </>

                 :
                 <>
                     { NoResultFound  &&  <Box sx={{px:2,py:4}}>
                      <Typography className='fs2 fw600'>
                      No results found
                      </Typography>
                      <Typography sx={{pt:.5,pb:4}} className='fs085 fw400'>
                      {`We are sorry but we can’t find any results for “pantfasff”`}
                      </Typography>
                      <Divider></Divider>
                     </Box>}
                    <Box
                        sx={{
                        mx: 2,
                        mt: NoResultFound ? 0 : 2
                    }}>
                        <Typography
                            sx={{
                            pb: 1
                        }}
                            className='fs500 fw600'>
                            People usually search for:
                        </Typography>
                        <Box >
                            <Btn
                                sx={{
                                px: 1,
                                mr: 1
                            }}
                                className='dark-bg2'>
                                Cloth
                            </Btn>
                            <Btn
                                sx={{
                                px: 0
                            }}
                                className='dark-bg2'>
                                Cloth
                            </Btn>
                        </Box>
                    </Box>
                    </>
                    }



                </Box>
            </Modal>

        </main>
    );
};

export default SimpleModal;
