package com.Banking_application.User.Register.Controller;

import com.Banking_application.User.Register.Entity.CreditEntity;
import com.Banking_application.User.Register.Entity.UserEntity;
import com.Banking_application.User.Register.Service.CreditCardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Creditcard")
public class CreditCardController {

    @Autowired
    private CreditCardServiceImpl creditCardService;

    // POST endpoint to create a new CreditCard
    @PostMapping
    public CreditEntity createCreditCard(@RequestBody CreditEntity creditCardEntity) {
        return creditCardService.createCreditCard(creditCardEntity);
    }

    @GetMapping
    public List<CreditEntity> getAllEntities() {
        return creditCardService.getAllEntities();
    }

}