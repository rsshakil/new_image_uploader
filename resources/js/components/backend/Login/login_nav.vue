<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div class="collapse navbar-collapse" id="navbarsExample09">
                        <ul class="navbar-nav border-left flex-row ">
                                <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-nowrap px-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="flag-icon flag-icon-jp"></span> 日本語
                                            <span class="flag-icon flag-icon-us"></span> English
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-small" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" :href="BASE_URL+'language/en'"><span class="flag-icon flag-icon-us"></span> English</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" :href="BASE_URL+'language/ja'"><span class="flag-icon flag-icon-jp"></span> 日本語</a>
                                        </div>
                                    </li>
                        </ul>

                </div>
            </nav>
</template>


