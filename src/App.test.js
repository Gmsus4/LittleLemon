import { fireEvent, render, screen } from '@testing-library/react';
import { BookingForm } from './components/BookingForm';
import { fetchAPI, initializeTimes, updateTimes } from './BookingPage';

describe('BookingForm Component', () => {
    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
        const headingElement = screen.getByText("Choose a date");
        expect(headingElement).toBeInTheDocument();
    });

    test('InitializeTimes returns correct hours', () => {
        const today = new Date();
        const expectedTimes = fetchAPI(today);
        expect(initializeTimes()).toEqual(expectedTimes);
    });

    test('UpdateTimes returns initial state if no logic implemented', () => {
        const initialState = initializeTimes();
        const action = { type: "UPDATE_TIMES", date: new Date() };
        const expectedTimes = fetchAPI(new Date());
        expect(updateTimes(initialState, action)).toEqual(expectedTimes);
    });

  });
  
  describe('HTML5 Validation', () => {
      test('Date field has correct HTML5 validation', () => {
          render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
          const dateInput = screen.getByLabelText(/Choose a date/i);
          expect(dateInput).toBeRequired();
          expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
      });

      test('Time field has correct HTML5 validation', () => {
          render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={() => {}} />);
          const timeSelect = screen.getByLabelText(/Choose time/i);
          expect(timeSelect).toBeRequired();
      });

      test('Number of guests field has correct HTML5 validation', () => {
          render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
          const guestsInput = screen.getByLabelText(/Number of guests/i);
          expect(guestsInput).toBeRequired();
          expect(guestsInput).toHaveAttribute('min', '1');
          expect(guestsInput).toHaveAttribute('max', '10');
      });

      test('Occasion field has correct HTML5 validation', () => {
          render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
          const occasionSelect = screen.getByLabelText(/Select occasion/i);
          expect(occasionSelect).toBeRequired();
      });
  });

  describe('Form Submission and Button State', () => {
      test('Submit button is disabled if the form is invalid', () => {
          render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={() => {}} />);
          const submitButton = screen.getByRole('button', { name: /make your reservation/i });
          expect(submitButton).toHaveStyle({ backgroundColor: 'var(--secundaryGrey)' });

          fireEvent.change(screen.getByLabelText(/Choose a date/i), { target: { value: '2023-09-17' } });
          fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });

          expect(submitButton).toHaveStyle({ backgroundColor: 'var(--secundaryGrey)' });
      });

      test('Submit button is enabled when the form is valid', () => {
          const mockSubmit = jest.fn();
          render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={mockSubmit} />);

          fireEvent.change(screen.getByLabelText(/Choose a date/i), { target: { value: '2023-09-17' } });
          fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
          fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '2' } });
          fireEvent.change(screen.getByLabelText(/Select occasion/i), { target: { value: 'birthday' } });

          const submitButton = screen.getByRole('button', { name: /make your reservation/i });
          expect(submitButton).toHaveStyle({ backgroundColor: 'var(--primaryYellow)' });

          fireEvent.click(submitButton);

          expect(mockSubmit).toHaveBeenCalledWith({
              date: '2023-09-17',
              time: '17:00',
              guests: '2',
              occasion: 'birthday'
          });
      });
  });