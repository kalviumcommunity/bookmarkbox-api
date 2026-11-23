async function register(input = {}) {
  const { name, email, password } = input;

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof password !== 'string' || !password.trim()
  ) {
    throw new AppError(400, 'INVALID_INPUT', 'name, email, password are required');
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (await userRepository.findByEmail(normalizedEmail)) {
    throw new AppError(409, 'EMAIL_EXISTS', 'Email already registered');
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  const created = await userRepository.create({
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
  });

  return publicUser(created);
}

async function login(input = {}) {
  const { email, password } = input;

  if (
    typeof email !== 'string' || !email.trim() ||
    typeof password !== 'string' || !password.trim()
  ) {
    throw new AppError(400, 'INVALID_INPUT', 'email and password are required');
  }

  const user = await userRepository.findByEmail(email.trim().toLowerCase());
  const ok = user && await bcrypt.compare(password, user.passwordHash);

  if (!ok) {
    throw new AppError(401, 'INVALID_CREDENTIALS', 'Invalid email or password');
  }

  const token = jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
}