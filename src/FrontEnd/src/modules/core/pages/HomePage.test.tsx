import { render, screen, act} from '@testing-library/react'

import { useCamarasStore } from '@cameras/index' 
import { HomePage } from './HomePage'


describe("Switch", () => {

    it('Should render fullcameras when of', () => {

        // Arrange
        render(<HomePage />);
        
        // Act
        act(() => {
            useCamarasStore.setState({
                switchValue: false            
            });
            screen.debug();
        })


        // Assert
        expect(screen.getByText(/fullcameras/i)).toBeInTheDocument();
    });


    it('Should render fullcameras when on', () => {
        // Arrange
        render(<HomePage />);
        
        // Act
        act(() => {
            useCamarasStore.setState({
                switchValue: true            
            });
        })

        // Assert
        expect(screen.getByText(/individualcameras/i)).toBeInTheDocument();
    });
});