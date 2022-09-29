import './LoginPage.css'
import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Slider, Box } from '@mui/material';
import { Container } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TbCurrencyDollar } from "react-icons/tb";
import { styled } from '@mui/material/styles';

function LoginPage() {

  const [custom, setCustom] = React.useState(false)
  const [cardpayment, setCardpayment] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleCustomClick = () => {
    setCustom(!custom)
  }
  const handlePaymentClick = () => {
    setCardpayment(!cardpayment)
  }
  const handleSliderChange = (e) => {
    setValue(e.target.value)
  }

  function valuetext(value) {
    return `${value}`;
  }

  const PrettySlider = styled(Slider)({
    color: '#2878FA',
    height: 12,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'unset',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
        color:"black"
      },
    },
  });


  return (
    <div>

      <AppBar position="static" style={{ backgroundColor: '#ecebe7' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src='https://staging.itsmaideasy.com/static/media/maideasy_stack.7b8e1733126c06bfa3de.png' className='nav_img'></img>
          <img src='https://files.stripe.com/links/MDB8YWNjdF8xSndXZHhCYnVpT1RPZDIyfGZsX3Rlc3RfS0R1QkRaanlOMWc4eTRBS0t3VUNRbWV3006eRJNcX5' className='nav_img'></img>
        </Toolbar>
      </AppBar>

      <Grid xs={12} sm={12} p={4} >
        <div className='main_body'>
          <h4 className='main_body_heading' mb={'10px'}>Tipping Fact Header 1</h4>
          <p className='main_body_para'>If you’re a server in the Northeast, you’re in luck. The Northeastern states are very generous when it comes to tipping, leaving tip th</p>
        </div>



        <Container>
          {/* <Box className={custom ? 'notshow' : 'show'} sx={{ display: 'flex', gap: "20px", alignItems: 'center', marginTop: "30px" }}> */}
          {/* <Typography>$5</Typography> */}

          {/* < Slider
            className="slider_control"
              aria-label="Temperature"
              defaultValue={5}
              // getAriaValueText={valuetext}
              valueLabelDisplay="on"
              step={5}
              marks
              min={5}
              max={25}
            // padding={4}
            /> */}

         
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center", marginTop: "80px" }}>
            <span className='bold'>$5</span>
            {/* <Slider
                            aria-label="Temperature"
                            defaultValue={5}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={5}
                            marks
                            min={5}
                            max={25}
                            mt={4}
                        /> */}
            {/* <Slider
              aria-label="Always visible"
              defaultValue={value}
              onChange={handleSliderChange}
              getAriaValueText={valuetext}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => <div className='value-box'>
                {value}
              </div>}
              step={5}
              marks
              min={5}
              max={25}
            /> */}
            <PrettySlider 
            aria-label="Always visible"
            defaultValue={value}
            onChange={handleSliderChange}
            getAriaValueText={valuetext}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => <div className='value-box'>
              {value}
            </div>}
            step={5}
            marks
            min={5}
            max={25} />
            <span className='bold'><b>$25</b></span>
          </Box>




          {/* <Typography>$25</Typography> */}

          {/* </Box> */}
        </Container>

      </Grid>
      <Grid item xs={12} sm={12} >
        <Container xs={12} sm={12} md={6} style={{ display: 'flex', flexDirection: 'column', fontSize: "17px", padding: "40px", width: '48vw' }}>
          <p className='customtip' style={{ color: 'black', textAlign: "center" }} onClick={handleCustomClick} >Enter Custom tip</p>

          <div className={custom ? "show" : "notshow"}>

            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <h3 className='tip_heading'>Tip Amount</h3>
              <p style={{ color: "black", cursor: "pointer" }} onClick={handleCustomClick}>Back to Default</p>
            </div>
            <label style={{ position: "relative" }}>
              <i className='input_icon'><TbCurrencyDollar /></i>
              <input className='input_box primary' type='number' style={{ width: "41vw", height: "47px", borderRadius: "5px", padding: "3px", marginBottom: "12px", border: "1px red solid", marginTop: "3px", textAlign: "right" }} ></input>
            </label>

          </div>



          <input className='input_box primary' placeholder='Room Number (Optional)' type='number'></input>


          <Button className={cardpayment ? "notshow" : "show"} sx={{ p: 2, mt: 4 }} style={{ backgroundColor: "#2878fa", fontSize: "16px" }} fullWidth variant='contained' onClick={handlePaymentClick} >ENTER CARD</Button>

          {/* <Grid className={cardpayment ? "show" : "notshow"} style={{ border: "2px solid black", width: "533px" }}>
             <div style={{backgroundColor:"cyan"}}>
             <div >
                <h4>Card information</h4>
                <TextField sx={{ backgroundColor: 'white' }} fullWidth type='tel' pattern="[\d| ] {16,22}" placeholder='1234 1234 1234 1234'></TextField>
                <TextField sx={{ backgroundColor: "white" }} fullWidth placeholder='MM / YY CVV'></TextField>
              </div>
              <div>
              <h4>Name on Card</h4>
                <TextField sx={{ backgroundColor: "white" }} fullWidth type={'name'}></TextField>
                <Button sx={{ mt: 1, p: 2 }} fullWidth variant='contained' style={{ backgroundColor: "#2878fa", fontSize: "16px" }}>Pay</Button>
              </div>
              
             </div>
            </Grid> */}

        </Container>
      </Grid>


      <div className={cardpayment ? 'show' : 'notshow'} style={{ width: "100%", height: "70%", overflow: "hidden", padding: "20px" }}>
        <div style={{ backgroundColor: "white" }}>
          <div style={{ backgroundColor: "white", maxWidth: "500px", padding: "20px", marginLeft: "auto", marginRight: "auto", overflow: "hidden" }}>

            <form style={{ display: "block", width: "100%" }}>
              <p style={{ margin: "0px", textAlign: "left" }}>Card information</p>
              <div className='Demo'>
                <label className='topCardnumber'>
                  <div className="StripeElement" style={{ borderBottom: "1px solid" }}>
                    <div className="" >
                      <input style={{ border: "none", width: "100%" }} placeholder='1234 1234 1234 1234' />
                    </div>
                  </div>
                </label>
                <label className='topCardnumber'>
                  <div className="StripeElement">
                    <div className="" >
                      <input style={{ border: "none" }} placeholder='MM / YY CVV' />
                      <input style={{ border: "none" }} placeholder='CVV' />
                    </div>

                  </div>
                </label>
              </div>
              <p style={{ margin: "0px", textAlign: "left" }}>Name on Card</p>
              <div className="Demo" style={{ border: "none" }}>
                <input className="primary tipinpbg p-3 w-100" type={"text"} />
              </div>
              <button type="submit" className="btnbg p-3 w-100 mb-1">Pay</button>
            </form>

            {/* <div>
              <p style={{ fontFamily: 'sans-serif,poppins', font: "16px", color: "#212529" }}>Card information</p>
              <TextField sx={{ backgroundColor: 'white' }} fullWidth type='tel' pattern="[\d| ] {16,22}" placeholder='1234 1234 1234 1234'></TextField>
              <TextField sx={{ backgroundColor: "white" }} fullWidth placeholder='MM / YY CVV'></TextField>
            </div>
            <div>
              <p style={{ fontFamily: 'sans-serif,poppins', font: "16px", color: "#212529" }}>Name on Card</p>
              <TextField sx={{ backgroundColor: "white"}} fullWidth type={'name'}></TextField>
              <Button sx={{ mt: 1, p: 2 }} fullWidth variant='contained' style={{ backgroundColor: "#2878fa", fontSize: "16px" }}>Pay</Button>
            </div> */}
          </div>
        </div>
      </div>

      <p className='helvfont' style={{ textAlign: "center", padding: '5px', fontSize: "14px  " }}>Your tip goes directly to the maids who clean this room.</p>




      <Grid item xs={12} sm={12} style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
        <div><FacebookIcon fontSize='3px' />&nbsp;&nbsp;<YouTubeIcon fontSize='3px' />&nbsp;&nbsp;<TwitterIcon fontSize='3px' />&nbsp;&nbsp;<InstagramIcon fontSize='3px' /></div>

        <p style={{ fontSize: "10px", padding: "5px" }}>POWERED BY </p>
        <img src='https://staging.itsmaideasy.com/static/media/maideasy.ec082e1effb89fd6fb63.png' width={120} style={{ marginTop: "5px" }}></img>

      </Grid>

    </div>
  )
}

export default LoginPage



{/* <TextField fullWidth placeholder='$' type={'number'} style={{ backgroundColor: "white", color: 'black' }}></TextField> */ }
