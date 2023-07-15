import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const Video = ({ video }) => {

 

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img src={video.image} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          
          <Typography color="blue-gray" className="font-medium">
            <Link to={`/products/${video.id}`} >{video.title.es}</Link>
          </Typography>

        
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {video.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        
      </CardFooter>
    </Card>
  );
};


export default Video;
