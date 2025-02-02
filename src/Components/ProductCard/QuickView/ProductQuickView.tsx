"use client"
import { Box, Modal, Typography, Divider, IconButton } from '@mui/material'
import { BsBag } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci'
import Btn from '@/Components/Btn/Btn'
import ProductImageSwiper from '@/Components/ProductImageSwiper/ProductImageSwiper'
import useProductActions from '@/Hooks/useProductActions'
import QtySelector from '@/Components/ClientSide/ProductClient/QtySelector'
import { useQuickViewContext } from '@/Utils/Context/Contexts'
import ColorSelector from '@/Components/ColorSelect/ColorSelect'
import SizeFilter from '@/Components/FilterOptions/FilterForms/SizeFilter'
// import { ProductData } from '@/Utils/Types'

const ProductQuickView = () => {
    const { isQuickViewOpen, setQuickViewOpen, product } = useQuickViewContext();

    const {
        quantity,
        setQuantity,
        selectedOptions,
        variants,
        isEmptyOptions,
        handleOptionChange,
        handleAddToCart,
    } = useProductActions(product );
  

    return (
        <Modal open={isQuickViewOpen} onClose={() => setQuickViewOpen(false)}>
      
         <Box className='flex center items-center' sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
         {product &&  <>        <Box className='bg-white relative' sx={{ display: 'flex', flexDirection: 'column', width: '90%', maxWidth: 900, borderRadius: 2, p: 4, boxShadow: 3 }}>
                    <IconButton onClick={() => setQuickViewOpen(false)} sx={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>×</IconButton>
                    <Box className='flex' sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                        <Box sx={{ flex: 1, minWidth: 300 }}>
                            <ProductImageSwiper Slides={product.images} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography className='fs3 dark fw700'>{product.title}</Typography>
                            <Typography className='fs1 fw400'>{product.category}</Typography>
                            <Typography className='fs1 dark fw600'>${product.price}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <QtySelector quantity={quantity} setQuantity={setQuantity} />
                            {variants && variants?.length > 0 && (
                                <Box sx={{ border: isEmptyOptions ? '1px solid red' : 'none', p: isEmptyOptions ? 2 : 0, mt: 2 }}>
                                    {isEmptyOptions && (
                                        <Typography sx={{ color: 'red', fontSize: '.8em' }}>Please select an option.</Typography>
                                    )}
                                    {variants.map(variant => {
                                        const options = variant.value?.split(',').map(s => s.trim()) || [];
                                        if (!options.length) return null;
                                        return (
                                            <Box key={variant.key} sx={{ mt: 2 }}>
                                                <Typography className='fw500 gray2 fs075' sx={{ py: .25 }}>{variant.key}</Typography>
                                                {variant.key.toLowerCase().includes("color") ? (
                                                    <ColorSelector selectedOptions={selectedOptions} onOptionChange={handleOptionChange} colors={options} />
                                                ) : (
                                                    <SizeFilter selectedOptions={selectedOptions} onOptionChange={handleOptionChange} sizes={options} name={variant.key} />
                                                )}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}
                            <Box className='flex items-center gap1' sx={{ mt: 2 }}>
                                <Btn maxWidth disabled={isEmptyOptions} onClick={() => 
                                    {setQuickViewOpen(false);
                                    handleAddToCart()}
                                    } className='w100 white fs075' v2>
                                    {isEmptyOptions ? 'Please Select Options' : <><BsBag fontSize={'1.25em'} /> Add To Cart</>}
                                </Btn>
                                <Btn className='favorite-btn'><CiHeart fontSize='2.05em' /></Btn>
                            </Box>
                            <Btn maxWidth disabled={isEmptyOptions} onClick={() => {
                                setQuickViewOpen(false);
                                handleAddToCart(true)}} className='fs075' border sx={{ mt: 2 }}>Quick Buy</Btn>
                        </Box>
                    </Box>
                </Box>
            </>
            }
            </Box>
         
        </Modal>
    );
};

export default ProductQuickView;
