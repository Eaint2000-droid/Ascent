import React from 'react'
import { Card, CardMedia, Typography} from '@material-ui/core/';
import useStyles from './styles';

export default function Campaign({campaign}) {
  const classes = useStyles();
  var rewardType;
  var cardProgram;

  switch(campaign[2]){
    case 1:
      cardProgram = "SCIS Shopping Card";
      rewardType = campaign[7] + "Points";
      break;
    case 2: 
      cardProgram = "SCIS Premium Miles Card";
      rewardType = campaign[7] + "Miles";
      break;
    case 3: 
      cardProgram = "SCIS Platinum Miles Card";
      rewardType = campaign[7] + "Miles";
      break;
    case 4: 
      cardProgram = "SCIS Freedom Card";
      rewardType = campaign[7] + "% Cashback";
      break;
    default:
      cardProgram = "";
  }

  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={`https://cs301-campaign-image-upload.s3.ap-southeast-1.amazonaws.com/${campaign[5]}`|| 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
    <Typography className={classes.title} style={{fontSize:20, marginTop:20}}gutterBottom variant="h5" component="h2">{`Earn ${rewardType} with a ${cardProgram} `}</Typography>
    <Typography variant="body2" style={{marginLeft:15,marginRight:15, marginBottom:20,fontSize:12}} color="textSecondary" component="p">{`for a minimum spending of $${campaign[6]} with ${campaign[1]}.`}</Typography>
    <Typography variant="body2" style={{marginLeft:15,marginRight:15,marginBottom:1,fontSize:12}} component="h2">{`Campaign Start Date: ${campaign[3]}`}</Typography>
    <Typography variant="body2" style={{marginLeft:15,marginRight:15, marginBottom:20,fontSize:12}} component="h2">{`Campaign End Date: ${campaign[4]}`}</Typography>
  </Card>
  );
}