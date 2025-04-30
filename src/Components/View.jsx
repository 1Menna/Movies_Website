import React from 'react'
import {
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
  
const View = ({id,Show}) => {
  const navigate = useNavigate();
  const GoToDetails = () => {
    navigate('/Details', { state: { id: id } });
  }
  return (
    <div className="group relative">
    <Card className="m-5 max-w-[290px] min-w-[300px] rounded-none group-hover:opacity-50 transition-opacity duration-400">
      <CardHeader floated={false} className="h-96 m-0 rounded-none"> {/* Added rounded-none here */}
        <img 
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${Show.poster_path}`}
          alt="movie-poster" 
          className="h-full w-full object-cover rounded-none" 
        />
      </CardHeader>
      <CardBody className="bg-neutral-content text-center p-0"> {/* Removed padding */}
        <Typography variant="h6" className="text-2xl truncate px-2 pt-1"> {/* Added individual padding */}
        {Show.title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center pt-5 bg-neutral-content rounded-none"> {/* Added rounded-none */}
        <Button variant="outlined" size="sm" className="text-xs rounded-none" onClick={()=>GoToDetails(id)}> {/* Added rounded-none */}
          Details
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default View