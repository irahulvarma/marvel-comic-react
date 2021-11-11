<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private $passwordhasher;

    function __constructor(UserPasswordHasherInterface $passwordhasher) {
        $this->passwordhasher =  $passwordhasher;
    }

    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $user = new User();
        $user->setEmail('test@test.com');
        $user->setPassword($this->passwordhasher->hashPassword(
                $user,
                'the_new_password'
            )
        );

        $manager->flush();
    }
}
