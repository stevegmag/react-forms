

        <CheckBox  
          title={'Agreement'}
          name={'agreement'}
          options='By checking this box, I agree that Walden University may contact me by email, text message, autodialed telephone call, and prerecorded message at the contact information provided above regarding personalized opportunities and offers to further my education. I understand that I may withdraw my consent at any time and that my consent is not a condition of any purchase. I have received the Walden University Privacy Policy.  Privacy Policy.'
          selectedOptions = { this.state.newUser.agreement}
          handleChange={this.handleCheckBox}
        /> 
        {/* Skill */}
        
        <TextArea
          title={'About you.'}
          rows={10}
          value={this.state.newUser.about}
          name={'currentPetInfo'}
          handleChange={this.handleTextArea}
          placeholder={'Describe your past experience and skills'} 
        />About you 
        {/* About you */}