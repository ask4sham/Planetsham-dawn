<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlanetSham - Authentication Setup</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #e0e0e0;
            min-height: 100vh;
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            margin-bottom: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .logo h1 {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(90deg, #00c9ff, #92fe9d);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        
        .logo-icon {
            font-size: 32px;
            color: #92fe9d;
        }
        
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        
        .card {
            background: rgba(25, 35, 45, 0.8);
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 30px;
        }
        
        .card-header {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-header h2 {
            font-size: 22px;
            font-weight: 600;
            color: #00c9ff;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #92fe9d;
        }
        
        .form-control {
            width: 100%;
            padding: 12px 15px;
            background: rgba(35, 45, 55, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: #e0e0e0;
            font-size: 16px;
        }
        
        .form-control:focus {
            outline: none;
            border-color: #00c9ff;
            box-shadow: 0 0 0 2px rgba(0, 201, 255, 0.2);
        }
        
        .btn {
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background: linear-gradient(90deg, #00c9ff, #92fe9d);
            color: #0f2027;
        }
        
        .btn-primary:hover {
            background: linear-gradient(90deg, #92fe9d, #00c9ff);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 201, 255, 0.4);
        }
        
        .file-structure {
            background: rgba(35, 45, 55, 0.5);
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }
        
        .file {
            padding-left: 20px;
            margin: 5px 0;
        }
        
        .folder {
            font-weight: bold;
            color: #00c9ff;
            margin: 10px 0 5px 0;
        }
        
        .info-box {
            background: rgba(0, 201, 255, 0.1);
            border-left: 4px solid #00c9ff;
            padding: 15px;
            border-radius: 4px;
            margin: 20px 0;
            font-size: 14px;
        }
        
        .code-block {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }
        
        .step {
            margin-bottom: 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .step-number {
            display: inline-block;
            width: 30px;
            height: 30px;
            background: #00c9ff;
            color: #0f2027;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            font-weight: bold;
            margin-right: 10px;
        }
        
        @media (max-width: 768px) {
            .content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <div class="logo-icon"><i class="fas fa-planet-ringed"></i></div>
                <h1>PlanetSham - Supabase Integration</h1>
            </div>
        </header>
        
        <div class="content">
            <div>
                <div class="card">
                    <div class="card-header">
                        <h2>Supabase Setup Steps</h2>
                    </div>
                    
                    <div class="step">
                        <h3><span class="step-number">1</span>Create Supabase Account</h3>
                        <p>Go to <a href="https://supabase.com" style="color: #00c9ff;">supabase.com</a> and create a new account and project.</p>
                    </div>
                    
                    <div class="step">
                        <h3><span class="step-number">2</span>Install Supabase Client</h3>
                        <p>In your project root directory, run:</p>
                        <div class="code-block">
                            npm install @supabase/supabase-js
                        </div>
                    </div>
                    
                    <div class="step">
                        <h3><span class="step-number">3</span>Create Supabase Client</h3>
                        <p>Create a new file at <code>src/lib/supabaseClient.js</code> with the following code:</p>
                        <div class="code-block">
                            import { createClient } from '@supabase/supabase-js'<br><br>
                            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL<br>
                            const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY<br><br>
                            export const supabase = createClient(supabaseUrl, supabaseAnonKey)
                        </div>
                    </div>
                    
                    <div class="step">
                        <h3><span class="step-number">4</span>Environment Variables</h3>
                        <p>Create a <code>.env.local</code> file in your root directory with your Supabase credentials:</p>
                        <div class="code-block">
                            NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url<br>
                            NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h2>Project Structure</h2>
                    </div>
                    
                    <p>Based on your screenshot, here's where to place Supabase files:</p>
                    
                    <div class="file-structure">
                        <div class="folder">PLANETSHAM-DAWN</div>
                        <div class="file">package.json <span style="color: #92fe9d;">← Add "@supabase/supabase-js" to dependencies</span></div>
                        <div class="file">.env.local <span style="color: #92fe9d;">← Create this file for environment variables</span></div>
                        
                        <div class="folder">src</div>
                        <div class="folder">lib <span style="color: #92fe9d;">← Create this folder if it doesn't exist</span></div>
                        <div class="file">supabaseClient.js <span style="color: #92fe9d;">← Create this file</span></div>
                        
                        <div class="folder">components</div>
                        <div class="folder">auth <span style="color: #92fe9d;">← Create this folder for auth components</span></div>
                        <div class="file">Login.js</div>
                        <div class="file">SignUp.js</div>
                    </div>
                </div>
            </div>
            
            <div>
                <div class="card">
                    <div class="card-header">
                        <h2>Registration Example</h2>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="Enter email">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password">
                    </div>
                    
                    <button class="btn btn-primary" style="width: 100%;">Register with Supabase</button>
                    
                    <div class="info-box">
                        <i class="fas fa-info-circle"></i> This would connect to Supabase Auth in a real application.
                    </div>
                    
                    <div class="code-block">
                        // Example signUp function<br>
                        async function signUp(email, password) {<br>
                        &nbsp;&nbsp;const { user, error } = await supabase.auth.signUp({<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;email: email,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;password: password,<br>
                        &nbsp;&nbsp;});<br>
                        &nbsp;&nbsp;if (error) throw error;<br>
                        &nbsp;&nbsp;return user;<br>
                        }
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h2>Email Templates</h2>
                    </div>
                    
                    <p>Supabase provides customizable email templates for:</p>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li>Confirm Signup</li>
                        <li>Password Recovery</li>
                        <li>Email Change</li>
                        <li>Magic Links</li>
                    </ul>
                    
                    <p>You can customize these in your Supabase dashboard under:</p>
                    <div class="code-block">
                        Authentication → Settings → Email Templates
                    </div>
                    
                    <div class="info-box">
                        <i class="fas fa-lightbulb"></i> Make sure to configure your SMTP settings or use Supabase's built-in email service.
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h2>Next Steps</h2>
                    </div>
                    
                    <ol style="margin-left: 20px;">
                        <li>Set up your Supabase project and get API keys</li>
                        <li>Configure environment variables</li>
                        <li>Implement authentication components</li>
                        <li>Test the registration flow</li>
                        <li>Customize email templates</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <script>
        // This is just a demonstration - in a real app, you would import the supabase client
        document.querySelector('.btn-primary').addEventListener('click', function() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Please enter both email and password');
                return;
            }
            
            alert('In a real application, this would register with Supabase and send a verification email to: ' + email);
        });
    </script>
</body>
</html>