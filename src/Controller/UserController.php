<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;

class UserController extends AbstractController
{
    /**
     * @Route("/api/users/create", methods={"POST"},  name="Create a user")
     */
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher)
    {        

        $entityManager = $this->getDoctrine()->getManager();


        $request_data = json_decode($request->getContent(), true);
        $request_data = $request_data['fields'];

        $user = new User();

        $user->setUsername($request_data['username']);

        $user->setEmail($request_data['email']);

        $user->setRoles(['ROLE_USER']);

        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $request_data['password']
        );

        $user->setPassword($hashedPassword);

        $user->setAgree($request_data['agree']);

        $entityManager->persist($user);

        $entityManager->flush();

        $data_arr = ['formSubmitted' => 'true'];

        $response = new Response();

        $response->setContent(json_encode($data_arr));

        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
